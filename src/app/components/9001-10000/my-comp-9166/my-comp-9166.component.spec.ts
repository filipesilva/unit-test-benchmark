import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9166Component } from './my-comp-9166.component';

describe('MyComp9166Component', () => {
  let component: MyComp9166Component;
  let fixture: ComponentFixture<MyComp9166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
