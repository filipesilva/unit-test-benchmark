import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6162Component } from './my-comp-6162.component';

describe('MyComp6162Component', () => {
  let component: MyComp6162Component;
  let fixture: ComponentFixture<MyComp6162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
