import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3071Component } from './my-comp-3071.component';

describe('MyComp3071Component', () => {
  let component: MyComp3071Component;
  let fixture: ComponentFixture<MyComp3071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
