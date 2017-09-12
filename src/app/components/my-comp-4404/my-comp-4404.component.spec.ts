import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4404Component } from './my-comp-4404.component';

describe('MyComp4404Component', () => {
  let component: MyComp4404Component;
  let fixture: ComponentFixture<MyComp4404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
