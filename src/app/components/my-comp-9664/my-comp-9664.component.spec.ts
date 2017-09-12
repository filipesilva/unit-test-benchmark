import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9664Component } from './my-comp-9664.component';

describe('MyComp9664Component', () => {
  let component: MyComp9664Component;
  let fixture: ComponentFixture<MyComp9664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
