import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8855Component } from './my-comp-8855.component';

describe('MyComp8855Component', () => {
  let component: MyComp8855Component;
  let fixture: ComponentFixture<MyComp8855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
