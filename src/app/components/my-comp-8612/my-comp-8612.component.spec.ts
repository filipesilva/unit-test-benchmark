import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8612Component } from './my-comp-8612.component';

describe('MyComp8612Component', () => {
  let component: MyComp8612Component;
  let fixture: ComponentFixture<MyComp8612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
