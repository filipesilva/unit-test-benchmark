import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4890Component } from './my-comp-4890.component';

describe('MyComp4890Component', () => {
  let component: MyComp4890Component;
  let fixture: ComponentFixture<MyComp4890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
