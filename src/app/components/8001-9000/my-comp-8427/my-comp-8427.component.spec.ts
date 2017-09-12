import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8427Component } from './my-comp-8427.component';

describe('MyComp8427Component', () => {
  let component: MyComp8427Component;
  let fixture: ComponentFixture<MyComp8427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
