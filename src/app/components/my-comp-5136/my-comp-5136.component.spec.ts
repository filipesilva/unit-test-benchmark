import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5136Component } from './my-comp-5136.component';

describe('MyComp5136Component', () => {
  let component: MyComp5136Component;
  let fixture: ComponentFixture<MyComp5136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
