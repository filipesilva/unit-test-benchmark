import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4810Component } from './my-comp-4810.component';

describe('MyComp4810Component', () => {
  let component: MyComp4810Component;
  let fixture: ComponentFixture<MyComp4810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
