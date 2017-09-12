import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp154Component } from './my-comp-154.component';

describe('MyComp154Component', () => {
  let component: MyComp154Component;
  let fixture: ComponentFixture<MyComp154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
