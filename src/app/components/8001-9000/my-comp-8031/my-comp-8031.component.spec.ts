import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8031Component } from './my-comp-8031.component';

describe('MyComp8031Component', () => {
  let component: MyComp8031Component;
  let fixture: ComponentFixture<MyComp8031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
