import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4655Component } from './my-comp-4655.component';

describe('MyComp4655Component', () => {
  let component: MyComp4655Component;
  let fixture: ComponentFixture<MyComp4655Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4655Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4655Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
