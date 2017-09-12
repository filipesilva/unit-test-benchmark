import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4145Component } from './my-comp-4145.component';

describe('MyComp4145Component', () => {
  let component: MyComp4145Component;
  let fixture: ComponentFixture<MyComp4145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
