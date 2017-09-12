import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6071Component } from './my-comp-6071.component';

describe('MyComp6071Component', () => {
  let component: MyComp6071Component;
  let fixture: ComponentFixture<MyComp6071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
