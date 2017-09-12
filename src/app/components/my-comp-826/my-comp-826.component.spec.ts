import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp826Component } from './my-comp-826.component';

describe('MyComp826Component', () => {
  let component: MyComp826Component;
  let fixture: ComponentFixture<MyComp826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
