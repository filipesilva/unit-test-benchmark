import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3863Component } from './my-comp-3863.component';

describe('MyComp3863Component', () => {
  let component: MyComp3863Component;
  let fixture: ComponentFixture<MyComp3863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
