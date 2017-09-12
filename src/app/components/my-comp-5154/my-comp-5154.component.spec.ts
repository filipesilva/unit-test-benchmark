import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5154Component } from './my-comp-5154.component';

describe('MyComp5154Component', () => {
  let component: MyComp5154Component;
  let fixture: ComponentFixture<MyComp5154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
