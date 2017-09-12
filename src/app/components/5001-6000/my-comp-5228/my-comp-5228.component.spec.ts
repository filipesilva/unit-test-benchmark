import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5228Component } from './my-comp-5228.component';

describe('MyComp5228Component', () => {
  let component: MyComp5228Component;
  let fixture: ComponentFixture<MyComp5228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
