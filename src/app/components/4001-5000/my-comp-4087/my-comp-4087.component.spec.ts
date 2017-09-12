import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4087Component } from './my-comp-4087.component';

describe('MyComp4087Component', () => {
  let component: MyComp4087Component;
  let fixture: ComponentFixture<MyComp4087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
