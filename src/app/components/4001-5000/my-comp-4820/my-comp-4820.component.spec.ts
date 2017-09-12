import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4820Component } from './my-comp-4820.component';

describe('MyComp4820Component', () => {
  let component: MyComp4820Component;
  let fixture: ComponentFixture<MyComp4820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
