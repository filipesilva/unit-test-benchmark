import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4949Component } from './my-comp-4949.component';

describe('MyComp4949Component', () => {
  let component: MyComp4949Component;
  let fixture: ComponentFixture<MyComp4949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
