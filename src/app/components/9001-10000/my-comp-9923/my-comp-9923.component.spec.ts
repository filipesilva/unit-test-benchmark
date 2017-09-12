import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9923Component } from './my-comp-9923.component';

describe('MyComp9923Component', () => {
  let component: MyComp9923Component;
  let fixture: ComponentFixture<MyComp9923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
