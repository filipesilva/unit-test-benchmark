import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8059Component } from './my-comp-8059.component';

describe('MyComp8059Component', () => {
  let component: MyComp8059Component;
  let fixture: ComponentFixture<MyComp8059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
