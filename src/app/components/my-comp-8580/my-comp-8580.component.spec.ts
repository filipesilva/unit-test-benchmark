import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8580Component } from './my-comp-8580.component';

describe('MyComp8580Component', () => {
  let component: MyComp8580Component;
  let fixture: ComponentFixture<MyComp8580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
