import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6068Component } from './my-comp-6068.component';

describe('MyComp6068Component', () => {
  let component: MyComp6068Component;
  let fixture: ComponentFixture<MyComp6068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
