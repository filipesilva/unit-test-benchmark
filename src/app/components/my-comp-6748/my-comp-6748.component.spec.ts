import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6748Component } from './my-comp-6748.component';

describe('MyComp6748Component', () => {
  let component: MyComp6748Component;
  let fixture: ComponentFixture<MyComp6748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
