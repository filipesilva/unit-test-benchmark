import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3101Component } from './my-comp-3101.component';

describe('MyComp3101Component', () => {
  let component: MyComp3101Component;
  let fixture: ComponentFixture<MyComp3101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
