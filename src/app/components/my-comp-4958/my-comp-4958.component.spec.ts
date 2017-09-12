import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4958Component } from './my-comp-4958.component';

describe('MyComp4958Component', () => {
  let component: MyComp4958Component;
  let fixture: ComponentFixture<MyComp4958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
