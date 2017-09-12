import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6996Component } from './my-comp-6996.component';

describe('MyComp6996Component', () => {
  let component: MyComp6996Component;
  let fixture: ComponentFixture<MyComp6996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
