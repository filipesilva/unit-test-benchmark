import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4298Component } from './my-comp-4298.component';

describe('MyComp4298Component', () => {
  let component: MyComp4298Component;
  let fixture: ComponentFixture<MyComp4298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
