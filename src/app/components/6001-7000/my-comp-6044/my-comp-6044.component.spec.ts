import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6044Component } from './my-comp-6044.component';

describe('MyComp6044Component', () => {
  let component: MyComp6044Component;
  let fixture: ComponentFixture<MyComp6044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
