import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5059Component } from './my-comp-5059.component';

describe('MyComp5059Component', () => {
  let component: MyComp5059Component;
  let fixture: ComponentFixture<MyComp5059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
