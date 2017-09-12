import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6092Component } from './my-comp-6092.component';

describe('MyComp6092Component', () => {
  let component: MyComp6092Component;
  let fixture: ComponentFixture<MyComp6092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
