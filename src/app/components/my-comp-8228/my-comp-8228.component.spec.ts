import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8228Component } from './my-comp-8228.component';

describe('MyComp8228Component', () => {
  let component: MyComp8228Component;
  let fixture: ComponentFixture<MyComp8228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
