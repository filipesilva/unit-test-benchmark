import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8172Component } from './my-comp-8172.component';

describe('MyComp8172Component', () => {
  let component: MyComp8172Component;
  let fixture: ComponentFixture<MyComp8172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
