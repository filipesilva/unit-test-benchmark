import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4335Component } from './my-comp-4335.component';

describe('MyComp4335Component', () => {
  let component: MyComp4335Component;
  let fixture: ComponentFixture<MyComp4335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
