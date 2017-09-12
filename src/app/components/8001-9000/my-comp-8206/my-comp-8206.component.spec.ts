import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8206Component } from './my-comp-8206.component';

describe('MyComp8206Component', () => {
  let component: MyComp8206Component;
  let fixture: ComponentFixture<MyComp8206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
