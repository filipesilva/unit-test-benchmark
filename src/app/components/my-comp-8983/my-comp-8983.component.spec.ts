import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8983Component } from './my-comp-8983.component';

describe('MyComp8983Component', () => {
  let component: MyComp8983Component;
  let fixture: ComponentFixture<MyComp8983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
