import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5823Component } from './my-comp-5823.component';

describe('MyComp5823Component', () => {
  let component: MyComp5823Component;
  let fixture: ComponentFixture<MyComp5823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
