import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8432Component } from './my-comp-8432.component';

describe('MyComp8432Component', () => {
  let component: MyComp8432Component;
  let fixture: ComponentFixture<MyComp8432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
