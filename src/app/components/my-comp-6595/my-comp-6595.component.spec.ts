import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6595Component } from './my-comp-6595.component';

describe('MyComp6595Component', () => {
  let component: MyComp6595Component;
  let fixture: ComponentFixture<MyComp6595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
