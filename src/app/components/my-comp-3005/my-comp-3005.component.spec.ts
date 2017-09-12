import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3005Component } from './my-comp-3005.component';

describe('MyComp3005Component', () => {
  let component: MyComp3005Component;
  let fixture: ComponentFixture<MyComp3005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
