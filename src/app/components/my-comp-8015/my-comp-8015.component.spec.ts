import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8015Component } from './my-comp-8015.component';

describe('MyComp8015Component', () => {
  let component: MyComp8015Component;
  let fixture: ComponentFixture<MyComp8015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
