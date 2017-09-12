import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8804Component } from './my-comp-8804.component';

describe('MyComp8804Component', () => {
  let component: MyComp8804Component;
  let fixture: ComponentFixture<MyComp8804Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8804Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
