import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8793Component } from './my-comp-8793.component';

describe('MyComp8793Component', () => {
  let component: MyComp8793Component;
  let fixture: ComponentFixture<MyComp8793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
