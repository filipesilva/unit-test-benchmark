import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5427Component } from './my-comp-5427.component';

describe('MyComp5427Component', () => {
  let component: MyComp5427Component;
  let fixture: ComponentFixture<MyComp5427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
