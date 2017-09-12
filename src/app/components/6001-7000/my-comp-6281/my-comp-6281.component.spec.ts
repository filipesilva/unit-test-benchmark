import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6281Component } from './my-comp-6281.component';

describe('MyComp6281Component', () => {
  let component: MyComp6281Component;
  let fixture: ComponentFixture<MyComp6281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
