import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7071Component } from './my-comp-7071.component';

describe('MyComp7071Component', () => {
  let component: MyComp7071Component;
  let fixture: ComponentFixture<MyComp7071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
