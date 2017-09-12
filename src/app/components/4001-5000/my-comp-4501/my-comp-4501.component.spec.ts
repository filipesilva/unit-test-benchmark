import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4501Component } from './my-comp-4501.component';

describe('MyComp4501Component', () => {
  let component: MyComp4501Component;
  let fixture: ComponentFixture<MyComp4501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
