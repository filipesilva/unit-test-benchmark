import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3555Component } from './my-comp-3555.component';

describe('MyComp3555Component', () => {
  let component: MyComp3555Component;
  let fixture: ComponentFixture<MyComp3555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
