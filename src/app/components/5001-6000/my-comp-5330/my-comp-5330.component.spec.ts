import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5330Component } from './my-comp-5330.component';

describe('MyComp5330Component', () => {
  let component: MyComp5330Component;
  let fixture: ComponentFixture<MyComp5330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
