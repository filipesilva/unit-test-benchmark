import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4231Component } from './my-comp-4231.component';

describe('MyComp4231Component', () => {
  let component: MyComp4231Component;
  let fixture: ComponentFixture<MyComp4231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
